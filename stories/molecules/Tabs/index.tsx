import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { PColor } from '../../../assets/colors'

const TabPanel = ({ children }) => {
  return (
    <TabContent role='tabpanel' tabIndex='0'>
      {children}
    </TabContent>
  )
}

TabPanel.propTypes = {
  children: PropTypes.any.isRequired
}

export const Tabs = ({ children, tabBreak, width }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const selectTab = (tabIndex) => {
    setSelectedTab(tabIndex)
  }

  return (
    <TabsWrapper>
      <TabList
        breakPoint={tabBreak}
        columnWidth={width}
        role='tablist'
      >
        {React.Children.map(children, ({ props: { label } }, index) => {
          return (
            <TabButton
              aria-selected={selectedTab === index ? 'true' : 'false'}
              onClick={() => {
                return selectTab(index)
              }}
              role='tab'
              selected={selectedTab === index}
            >
              {label}
            </TabButton>
          )
        })}
      </TabList>

      <Content>
        {React.Children.map(children, (comp, index) => {
          return selectedTab === index ? comp : undefined
        })}
      </Content>
    </TabsWrapper>
  )
}

Tabs.propTypes = {
  children: PropTypes.any.isRequired,
  tabBreak: PropTypes.string,
  width: PropTypes.any
}

Tabs.defaultProps = {
  tabBreak: '200px'
}

const TabsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const TabButton = styled.button`
  height: 50px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: default;
  background: transparent;

  transition: border-color 0.2s ease-in;
  border: none;
  border-bottom: 4px solid
    ${(props) => {
    return props.selected ? PColor : '#eee'
  }};
  &:hover,
  &:focus,
  &:active {
    border-bottom: 4px solid
      ${(props) => {
    return props.selected ? PColor : '#c0bebe'
  }};
  }
`

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ columnWidth }) => {
    return columnWidth
      ? columnWidth.map((x) => {
        return `${x} `
      })
      : '1fr'
  }};
  height: auto;
  align-items: center;
  margin: 0 auto;
  outline: none;
  @media (max-width: ${(props) => {
    return props.breakPoint
  }}) {
    flex-direction: column;
    & > div,
    & > div > button {
      width: 100%;
    }
  }
`

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 16px;
`

const TabContent = styled.div`
  flex: 1;
  width: 100%;
`
