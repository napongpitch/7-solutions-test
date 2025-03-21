/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MainImport } from './routes/_main'
import { Route as MainIndexImport } from './routes/_main/index'
import { Route as MainDataFromApiImport } from './routes/_main/data-from-api'

// Create/Update Routes

const MainRoute = MainImport.update({
  id: '/_main',
  getParentRoute: () => rootRoute,
} as any)

const MainIndexRoute = MainIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => MainRoute,
} as any)

const MainDataFromApiRoute = MainDataFromApiImport.update({
  id: '/data-from-api',
  path: '/data-from-api',
  getParentRoute: () => MainRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_main': {
      id: '/_main'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof MainImport
      parentRoute: typeof rootRoute
    }
    '/_main/data-from-api': {
      id: '/_main/data-from-api'
      path: '/data-from-api'
      fullPath: '/data-from-api'
      preLoaderRoute: typeof MainDataFromApiImport
      parentRoute: typeof MainImport
    }
    '/_main/': {
      id: '/_main/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof MainIndexImport
      parentRoute: typeof MainImport
    }
  }
}

// Create and export the route tree

interface MainRouteChildren {
  MainDataFromApiRoute: typeof MainDataFromApiRoute
  MainIndexRoute: typeof MainIndexRoute
}

const MainRouteChildren: MainRouteChildren = {
  MainDataFromApiRoute: MainDataFromApiRoute,
  MainIndexRoute: MainIndexRoute,
}

const MainRouteWithChildren = MainRoute._addFileChildren(MainRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof MainRouteWithChildren
  '/data-from-api': typeof MainDataFromApiRoute
  '/': typeof MainIndexRoute
}

export interface FileRoutesByTo {
  '/data-from-api': typeof MainDataFromApiRoute
  '/': typeof MainIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_main': typeof MainRouteWithChildren
  '/_main/data-from-api': typeof MainDataFromApiRoute
  '/_main/': typeof MainIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/data-from-api' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/data-from-api' | '/'
  id: '__root__' | '/_main' | '/_main/data-from-api' | '/_main/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  MainRoute: typeof MainRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  MainRoute: MainRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_main"
      ]
    },
    "/_main": {
      "filePath": "_main.tsx",
      "children": [
        "/_main/data-from-api",
        "/_main/"
      ]
    },
    "/_main/data-from-api": {
      "filePath": "_main/data-from-api.tsx",
      "parent": "/_main"
    },
    "/_main/": {
      "filePath": "_main/index.tsx",
      "parent": "/_main"
    }
  }
}
ROUTE_MANIFEST_END */
