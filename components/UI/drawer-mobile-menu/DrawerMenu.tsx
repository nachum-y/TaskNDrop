import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { DrawerMenuType } from '../../../service/type'
import DynamicDrawerMenu from './DynamicDrawerMenu'
import { useRouter } from 'next/router'

const drawerBleeding = 56

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    drawerParam: DrawerMenuType
    oncloseDrawer: () => void
}


const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}))

const DrawerMenu: React.FC<{ drawerParam: DrawerMenuType, oncloseDrawer: () => void }> = ({ drawerParam, oncloseDrawer }) => {
    // const { window } = props
    const [open, setOpen] = React.useState(drawerParam?.setOpen || false)
    const router = useRouter()
    const toggleDrawer = (newOpen: boolean) => () => {
        oncloseDrawer()
    }

    const route = router.route



    React.useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            oncloseDrawer()
        })
        return () => {
            router.events.off("routeChangeComplete", () => {
            })
        }

        // oncloseDrawer()
    }, [router.events])
    // This is used only for the example
    // const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `${drawerParam?.side ? '100%' : `calc(50% - ${drawerBleeding}px)`}`,
                        overflow: 'visible',
                        width: '-webkit-fill-available',
                        maxWidth: '700px'
                    },
                }}
            />
            <Box sx={{ textAlign: 'center', pt: 1 }}>
                {/* <Button onClick={toggleDrawer(true)}>Open</Button> */}
            </Box>
            <SwipeableDrawer

                anchor={drawerParam?.side || 'bottom'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {open && (<StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary' }}> {drawerParam?.title}</Typography>
                    {drawerParam?.menuType && (<DynamicDrawerMenu menuType={drawerParam.menuType} />)}
                </StyledBox>)}
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',

                    }}
                >
                    {/* <Skeleton variant="rectangular" height="100%" /> */}
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}


export default DrawerMenu