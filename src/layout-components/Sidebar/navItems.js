import { PermissionRoute } from '../../react-router/permission'

import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone'

export default [
  {
    label: 'Navigation menu',
    content: [
      {
        label: PermissionRoute.PRODUCT.title,
        icon: DashboardTwoToneIcon,
        to: PermissionRoute.PRODUCT.path,
        roles: PermissionRoute.PRODUCT.roles
      }
    ]
  }
]
