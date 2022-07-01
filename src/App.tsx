import Routes from '@/router/routes'
import { Suspense } from 'react'
import NProgress from '@/components/NProgress'

function App() {
  return (
    <Suspense fallback={<NProgress />}>
      <Routes />
    </Suspense>
  )
}

export default App
