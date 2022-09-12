import { useRef, useState } from 'react'
import { ClickAwayListener, Popper } from '@mui/material'

import classes from './CelMenu.module.scss'
import DynamicCelMenu from './DynamicCelMenu'
import { Col } from '../../../../service/type'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/system'




// const Div = styled.div`
// display: block;
// background-color: #FFFFFF;
// border: 1px solid #DDDDDD;
// -o-transition: left 150ms cubic-bezier(0, 0, 0.35, 1);
// transition: left 150ms cubic-bezier(0, 0, 0.35, 1);
// box-shadow: 0 4px 17px 6px rgb(0 0 0 / 10%);
// box-shadow: 0 8px 16px 0 rgb(0 0 0 / 32%);
// font-size: 14px;
// transition: width .1s;
// pointer-events: all;
// opacity: 1;
// padding: 1rem 1.5rem 0.5rem;
// border-radius: 8px;


// &:before,:after {
//     content: '';
//     display: block;
//     position: absolute;
//     bottom: 0%;
//     width: 0;
//     height: 0;
// }

// &:before {
//     left: 50%;
//     border: 0.5rem solid transparent;
//     border-bottom-color: #ddd;
// }

// &:after {
//     left: 50%;
//     border: 0.5rem solid transparent;
//     border-bottom-color: #fff;
// }

// `

const useStyles = makeStyles((theme) => ({
    popper: {
        zIndex: 1000,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${'blue'} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${'blue'} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${'blue'} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${'blue'}`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
}))





const CelMenu: React.FC<{ anchorElement: HTMLSpanElement, onClose: () => void, menuType: Col }> = ({ anchorElement, onClose, menuType }) => {

    const [anchorElCel, setAnchorElCel] = useState<HTMLSpanElement | null>(anchorElement)
    const [arrow, setArrow] = useState(true)

    const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null)
    const classesnew = useStyles()


    const handleClose = () => {
        onClose()
    }



    const open = Boolean(anchorElCel)
    const canBeOpen = open && Boolean(anchorElCel)
    const id = canBeOpen ? 'transition-popper' : undefined



    return (

        < ClickAwayListener onClickAway={handleClose} >
            <Popper id={id} open={open} anchorEl={anchorElCel} placement={'bottom'} className={classesnew.popper}
                modifiers={[
                    {
                        name: 'flip',
                        enabled: true,
                        options: {
                            altBoundary: true,
                            rootBoundary: 'document',
                            padding: 8,
                        },
                    },
                    {
                        name: 'preventOverflow',
                        enabled: true,
                        options: {
                            altAxis: true,
                            altBoundary: true,
                            tether: true,
                            rootBoundary: 'document',
                            padding: 8,
                        },
                    },
                    {
                        name: 'arrow',
                        enabled: true,
                        options: {
                            element: arrowRef,
                        },
                    },
                ]}
            >
                <div  className={classes['status-picker-view']} style={{}} >
                    <DynamicCelMenu menuType={menuType} />
                </div >
                {arrow ? <span className={classesnew.arrow} ref={setArrowRef} /> : null}

            </Popper >
        </ClickAwayListener >


    )


}

export default CelMenu