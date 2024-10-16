/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DoctorsImport } from './routes/doctors'
import { Route as IndexImport } from './routes/index'
import { Route as TemplatesIndexImport } from './routes/templates/index'
import { Route as ReportsIndexImport } from './routes/reports/index'
import { Route as PatientsIndexImport } from './routes/patients/index'
import { Route as AnalyticsIndexImport } from './routes/analytics/index'
import { Route as PatientsNewImport } from './routes/patients/new'
import { Route as DoctorsNewImport } from './routes/doctors/new'

// Create/Update Routes

const DoctorsRoute = DoctorsImport.update({
  path: '/doctors',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TemplatesIndexRoute = TemplatesIndexImport.update({
  path: '/templates/',
  getParentRoute: () => rootRoute,
} as any)

const ReportsIndexRoute = ReportsIndexImport.update({
  path: '/reports/',
  getParentRoute: () => rootRoute,
} as any)

const PatientsIndexRoute = PatientsIndexImport.update({
  path: '/patients/',
  getParentRoute: () => rootRoute,
} as any)

const AnalyticsIndexRoute = AnalyticsIndexImport.update({
  path: '/analytics/',
  getParentRoute: () => rootRoute,
} as any)

const PatientsNewRoute = PatientsNewImport.update({
  path: '/patients/new',
  getParentRoute: () => rootRoute,
} as any)

const DoctorsNewRoute = DoctorsNewImport.update({
  path: '/new',
  getParentRoute: () => DoctorsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/doctors': {
      id: '/doctors'
      path: '/doctors'
      fullPath: '/doctors'
      preLoaderRoute: typeof DoctorsImport
      parentRoute: typeof rootRoute
    }
    '/doctors/new': {
      id: '/doctors/new'
      path: '/new'
      fullPath: '/doctors/new'
      preLoaderRoute: typeof DoctorsNewImport
      parentRoute: typeof DoctorsImport
    }
    '/patients/new': {
      id: '/patients/new'
      path: '/patients/new'
      fullPath: '/patients/new'
      preLoaderRoute: typeof PatientsNewImport
      parentRoute: typeof rootRoute
    }
    '/analytics/': {
      id: '/analytics/'
      path: '/analytics'
      fullPath: '/analytics'
      preLoaderRoute: typeof AnalyticsIndexImport
      parentRoute: typeof rootRoute
    }
    '/patients/': {
      id: '/patients/'
      path: '/patients'
      fullPath: '/patients'
      preLoaderRoute: typeof PatientsIndexImport
      parentRoute: typeof rootRoute
    }
    '/reports/': {
      id: '/reports/'
      path: '/reports'
      fullPath: '/reports'
      preLoaderRoute: typeof ReportsIndexImport
      parentRoute: typeof rootRoute
    }
    '/templates/': {
      id: '/templates/'
      path: '/templates'
      fullPath: '/templates'
      preLoaderRoute: typeof TemplatesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface DoctorsRouteChildren {
  DoctorsNewRoute: typeof DoctorsNewRoute
}

const DoctorsRouteChildren: DoctorsRouteChildren = {
  DoctorsNewRoute: DoctorsNewRoute,
}

const DoctorsRouteWithChildren =
  DoctorsRoute._addFileChildren(DoctorsRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/doctors': typeof DoctorsRouteWithChildren
  '/doctors/new': typeof DoctorsNewRoute
  '/patients/new': typeof PatientsNewRoute
  '/analytics': typeof AnalyticsIndexRoute
  '/patients': typeof PatientsIndexRoute
  '/reports': typeof ReportsIndexRoute
  '/templates': typeof TemplatesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/doctors': typeof DoctorsRouteWithChildren
  '/doctors/new': typeof DoctorsNewRoute
  '/patients/new': typeof PatientsNewRoute
  '/analytics': typeof AnalyticsIndexRoute
  '/patients': typeof PatientsIndexRoute
  '/reports': typeof ReportsIndexRoute
  '/templates': typeof TemplatesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/doctors': typeof DoctorsRouteWithChildren
  '/doctors/new': typeof DoctorsNewRoute
  '/patients/new': typeof PatientsNewRoute
  '/analytics/': typeof AnalyticsIndexRoute
  '/patients/': typeof PatientsIndexRoute
  '/reports/': typeof ReportsIndexRoute
  '/templates/': typeof TemplatesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/doctors'
    | '/doctors/new'
    | '/patients/new'
    | '/analytics'
    | '/patients'
    | '/reports'
    | '/templates'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/doctors'
    | '/doctors/new'
    | '/patients/new'
    | '/analytics'
    | '/patients'
    | '/reports'
    | '/templates'
  id:
    | '__root__'
    | '/'
    | '/doctors'
    | '/doctors/new'
    | '/patients/new'
    | '/analytics/'
    | '/patients/'
    | '/reports/'
    | '/templates/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DoctorsRoute: typeof DoctorsRouteWithChildren
  PatientsNewRoute: typeof PatientsNewRoute
  AnalyticsIndexRoute: typeof AnalyticsIndexRoute
  PatientsIndexRoute: typeof PatientsIndexRoute
  ReportsIndexRoute: typeof ReportsIndexRoute
  TemplatesIndexRoute: typeof TemplatesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DoctorsRoute: DoctorsRouteWithChildren,
  PatientsNewRoute: PatientsNewRoute,
  AnalyticsIndexRoute: AnalyticsIndexRoute,
  PatientsIndexRoute: PatientsIndexRoute,
  ReportsIndexRoute: ReportsIndexRoute,
  TemplatesIndexRoute: TemplatesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/doctors",
        "/patients/new",
        "/analytics/",
        "/patients/",
        "/reports/",
        "/templates/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/doctors": {
      "filePath": "doctors.tsx",
      "children": [
        "/doctors/new"
      ]
    },
    "/doctors/new": {
      "filePath": "doctors/new.tsx",
      "parent": "/doctors"
    },
    "/patients/new": {
      "filePath": "patients/new.tsx"
    },
    "/analytics/": {
      "filePath": "analytics/index.tsx"
    },
    "/patients/": {
      "filePath": "patients/index.tsx"
    },
    "/reports/": {
      "filePath": "reports/index.tsx"
    },
    "/templates/": {
      "filePath": "templates/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
