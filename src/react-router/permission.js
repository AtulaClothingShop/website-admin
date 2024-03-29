const Role = {
  SYSTEM_ADMIN: 'SYSTEMADMIN',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
}

const PermissionRoute = {
  PRODUCT: {
    path: '/product',
    title: 'Product',
    roles: '@all'
  },

  NOT_FOUND: {
    path: '/404',
    title: 'Not Found'
  }
}

const AllRoute = Object.values(PermissionRoute).map((item) => item.path)

export { Role, PermissionRoute, AllRoute }
