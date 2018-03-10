// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import DetailsIcon from 'material-ui-icons/Details';
import LibraryBookIcon from 'material-ui-icons/LibraryBooks';
import BookMarkIcon from 'material-ui-icons/Bookmark';
import KeyIcon from 'material-ui-icons/VpnKey';
import AssignmentIcon from 'material-ui-icons/Assignment';
import "./Navbar.css";

export const mailFolderListItems = (
  <div>
    <ListItem  button>
      <ListItemIcon style={{color:"white"}}>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary={<span className='navitems' >HOME</span>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color:"white"}}>
        <LibraryBookIcon />
      </ListItemIcon>
      <ListItemText primary={<span className='navitems' >TUTORIAL</span>}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color:"white"}}>
        <BookMarkIcon />
      </ListItemIcon>
      <ListItemText primary={<span className='navitems' >BLOG</span>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color:"white"}}>
        <DetailsIcon />
      </ListItemIcon>
      <ListItemText primary={<span className='navitems' >ABOUT</span>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color:"white"}}>
        <KeyIcon />
      </ListItemIcon>
      <ListItemText primary={<span className='navitems' >LOGIN</span>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color:"white"}}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={<span className='navitems' >REGISTER</span>} />
    </ListItem>
  </div>
);