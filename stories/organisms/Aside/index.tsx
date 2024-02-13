import React, {
  memo,
  useEffect,
  useState
} from 'react'
import {
  IconBuys,
  IconCategorie,
  IconChart,
  IconHome,
  IconLogo,
  IconShopping,
  IconStore,
  IconTicket,
  IconTime,
  IconUser
} from '../../../assets/icons'
import {
  Button,
  Overline
} from '../../atoms'

import Link from 'next/link'
import { Options } from '../../molecules'
import { CustomLinkAside } from '../Aside/helpers'
import { Portal } from '../Portal'
import {
  ButtonGlobalCreate,
  Card,
  ContainerAside,
  Info,
  LeftNav,
  Router
} from './styled'
import { getGlobalStyle } from '../../../utils'

const MemoAside = ({
  isMobile = false,
  location = {
    pathname: '/'
  },
  countOrders = 0,
  setCollapsed,
  salesOpen,
  collapsed = false,
  dataStore = {
    storeName: '',
    idStore: '',
    uState: 1
  },
  loading = false,
  handleClick = (state) => { return state },
  handleOpenDeliveryTime = () => { return },
  setSalesOpen = (state) => { return state },
  setShowComponentModal = (state) => { return state }
}) => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(null)
  const pathname = location?.pathname === '/dashboard/[...name]'

  const {
    storeName,
    idStore,
    uState
  } = dataStore || {}

  const handleOpenCreateProduct = () => {
    setShowComponentModal(3)
    handleClick(3)
    setShow(!show)
  }

  const links = [
    { href: '/dashboard',
      icon: IconHome,
      size: '30px',
      label: 'Home'
    },
    { href: '/pedidos',
      icon: IconTicket,
      size: '25px',
      label: 'Pedidos',
      count: countOrders ?? 0
    },
    { href: idStore ? `/dashboard/${storeName}/${idStore}` : '/dashboard',
      icon: IconStore,
      size: '30px',
      label: 'Perfil'
    },
    { href: '/horarios',
      icon: IconTime,
      size: '25px',
      label: 'Horarios'
    },
    { icon: IconTime,
      size: '35px',
      label: 'Tiempo de entrega',
      onClick: handleOpenDeliveryTime
    },
    { href: '/ventas',
      icon: IconTicket,
      size: '25px',
      label: 'Ventas'
    },
    { href: '/informes',
      icon: IconChart,
      size: '25px',
      label: 'Informes'
    },
    { href: '/clientes',
      icon: IconUser,
      size: '25px',
      label: 'Clientes'
    },
    { href: '/compras',
      icon: IconBuys,
      size: '25px',
      label: 'Compras'
    },
    { href: '/categorias',
      icon: IconCategorie,
      size: '25px',
      label: 'Categorías'
    },
    { href: '/products',
      icon: IconShopping,
      size: '25px',
      label: 'Productos',
      multiple: [
        {
          href: '/products',
          icon: IconTicket,
          size: '20px',
          label: 'Productos',
          subLinks: [
            { href: '/products',
              icon: IconTicket,
              size: '20px',
              label: 'Productos'
            }
          ]
        }
      ]
    }
  ]

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault()
        setSalesOpen(!salesOpen)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salesOpen])

  const handleMenu = (index) => {
    setActive((prev) => {
      const state = index === prev ? false : index
      return state
    })
  }

  return (
    <>
      {isMobile &&
          <Overline
            bgColor='rgba(0, 0, 0, 0.162)'
            onClick={() => { return setCollapsed(!collapsed) }}
            show={collapsed}
            zIndex='999'
          />
      }
      <Overline
        bgColor='rgba(0, 0, 0, 0.162)'
        onClick={() => { return setShow(!show) }}
        show={show}
        zIndex={getGlobalStyle('--z-index-99999')}
      />
      <ContainerAside collapsed={isMobile ? collapsed : false}>
        <Card>
          <Info>
            <ButtonGlobalCreate onClick={() => { return setShow(!show) }}>
                Agregar Nuevo
            </ButtonGlobalCreate>
            <Portal>
              <LeftNav show={show && !salesOpen}>
                {location?.pathname !== '/products' && <Info>
                  <Button onClick={() => { return handleOpenCreateProduct() }}>
                      Productos
                  </Button>
                </Info>}
                {location?.pathname === '/products' && <Info>
                  <Button
                    onClick={() => { 
                      setShowComponentModal(4)
                      handleClick(4)
                    }}
                  >
                      Categorias
                  </Button>
                </Info>}
                <Info>
                  <Button onClick={() => { return setSalesOpen(!salesOpen) }}>
                      Ventas
                  </Button>
                </Info>
              </LeftNav>
            </Portal>
            {(loading) ? null : (!pathname && <Link href={`/dashboard/${storeName?.replace(/\s/g, '-').toLowerCase()}/${idStore}`}>
              <a>
                <h1 className='title_store'>
                  {storeName}
                </h1>
              </a>
            </Link>)
            }
            {pathname &&
                <h1 className='title_store'>{storeName}</h1>
            }
            {uState == 1 &&
                <div className='program_state'>
                  <IconLogo color='var(--color-icons-primary)' size='20px' />
                  <h3 className='sub_title_store'>En pausa programada</h3>
                </div>
            }
          </Info>
          <Router>
            {links.map(link => {
              const multiple = link.multiple || []
              return (
                <div key={link.href}>
                  {Boolean(!multiple.length) &&
                    <CustomLinkAside
                      count={link.count}
                      href={link.href}
                      icon={link.icon}
                      label={link.label}
                      size={link.size}
                      {...link}
                    />
                  }
                  {Array.isArray(multiple) &&
                    multiple.map((item, index) => {
                      const {
                        label,
                        href,
                        icon
                      } = item || {}
                      return (
                        <Options
                          active={index === active}
                          handleClick={() => { return handleMenu(index) }}
                          icon={icon}
                          index={index}
                          key={href}
                          label={label}
                          path={href}
                        >
                          {item.subLinks?.map((subLink) => {
                            return (<CustomLinkAside
                              href={subLink.href}
                              icon={subLink.icon}
                              key={subLink.href}
                              label={subLink.label}
                              size={subLink.size}
                              {...subLink}

                            />)
                          })}
                        </Options>

                      )
                    })
                  }
                </div>
              )})}
          </Router>
        </Card>
      </ContainerAside>
    </>
  )
}

export const Aside = memo(MemoAside)