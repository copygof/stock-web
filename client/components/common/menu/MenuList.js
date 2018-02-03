import React from 'react'
import PropTypes from 'prop-types'
import { MenuList, MenuItem } from 'material-ui/Menu'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import { ListItemIcon, ListItemText } from 'material-ui/List'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import IconDashboard from 'material-ui-icons/Dashboard'
import IconPeople from 'material-ui-icons/People'
import IconShoppingCart from 'material-ui-icons/ShoppingCart'
import IconDescription from 'material-ui-icons/Description'
import SendIcon from 'material-ui-icons/Send'
import IconLocalShipping from 'material-ui-icons/LocalShipping'
import IconStoreMallDirectory from 'material-ui-icons/StoreMallDirectory'
import IconLocalAtm from 'material-ui-icons/LocalAtm'
import IconSettings from 'material-ui-icons/Settings'
import IconPowerSettingsNew from 'material-ui-icons/PowerSettingsNew'
import { Link } from 'react-router-dom'
import { logout } from '../../../actions/authActions'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $text, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  text: {},
  icon: {},
})

function ListItemComposition(props) {
  const { classes } = props
  return (
    <Paper>
      <MenuList>
        <MenuItem className={classes.menuItem} component={Link} to='/dashboard'>
          <ListItemIcon className={classes.icon}>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Dashboard" />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to='/customer'>
          <ListItemIcon className={classes.icon}>
            <IconPeople />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Customer" />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to='/product'>
          <ListItemIcon className={classes.icon}>
            <IconShoppingCart />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Product" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <IconDescription />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Order" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <IconLocalShipping />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Delivery" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <IconStoreMallDirectory />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Stock" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <IconLocalAtm />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Accounting" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <IconSettings />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Settings" />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={logout}>
          <ListItemIcon className={classes.icon}>
            <IconPowerSettingsNew />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Logout" />
        </MenuItem>
      </MenuList>
    </Paper>
  )
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ListItemComposition)