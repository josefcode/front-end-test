import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export const DefaultLayout = () => {
  return (
    <>
     <Suspense fallback = {<Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <CircularProgress />
    </Box>}>
      <Outlet />
      </Suspense> 
    </>
  )
}