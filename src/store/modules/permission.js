import { asyncRoutes, constantRoutes } from '@/router'

function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
      return route.meta.roles.includes(roles)
    } else {
      return true
    }
  }

export function filterAsyncRoutes(routes, roles) {
    const res = []
  
    routes.forEach(route => {
      const tmp = { ...route }
      if (hasPermission(roles, tmp)) {
        if (tmp.children) {
          tmp.children = filterAsyncRoutes(tmp.children, roles)
        }
        res.push(tmp)
      }
    })
  
    return res
  }

const state = {
    routes: [],
    addRoutes: []
  }
  
  const mutations = {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  }
  
  const actions = {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes
        if (roles.includes('管理员')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
          console.log(accessedRoutes)
        }
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      }).catch(err => {
        console.log(err)
      })
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }