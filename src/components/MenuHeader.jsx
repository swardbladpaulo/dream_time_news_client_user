import React from 'react'
import { Menu, Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MasterModal from './MasterModal'
import Header from './Header'

const MenuHeader = () => {

  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item 
          as={Link}
          to={{pathname: "/"}}
        />
        <Image 
        src="./assets/dreamtimesnews.png"
        size="large"
        fluid="true" />
        <Menu.Item 
        />
        <Menu.Item>
          {/* <Header /> */}
          <MasterModal />
        </Menu.Item>
      </Menu>
    </Segment>
  )

}

export default MenuHeader