import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { IconArrowBottom } from '../../../assets/icons'

export const DropdownMenu = ({ options = [], show, position }) => {
  if (!show) return <></>
  return <Container position={position}>
    {options?.map((x, i) => {
      return <DropdownItem key={'context_menu_option_' + i} onClick={x?.action || (() => { return true })}>
        {x?.icon && <IconArrowBottom
          icon={x.icon}
          size={10}
          style={{ marginRight: '10px' }}
        />}
        {x?.optionName}
      </DropdownItem>
    })}
  </Container>
}


export const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 99;
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
    border-radius: .25rem;
    padding: .5rem 0;
    min-width: 10rem;
    background-color: #fff;
    color: #343434;
    ${props => {
    return props.position && css`
        top: ${props.position.y}px;
        left: ${props.position.x}px;
    `
  }}
    width: auto;
`

export const ContextTitle = styled.span`
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    padding: 6px;
`

export const DropdownItem = styled.a`
    display: block;
    width: 100%;
    padding: .35rem 1.5rem;
    clear: both;
    font-weight: 400;
    font-size: .8125rem;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &&:hover {
        color: #1e2125;
        text-decoration: none;
        background-color: #f8f9fa;
    }
`


DropdownMenu.propTypes = {
  options: PropTypes.array,
  show: PropTypes.bool,
  position: PropTypes.object,
  onClickOutside: PropTypes.func
}
