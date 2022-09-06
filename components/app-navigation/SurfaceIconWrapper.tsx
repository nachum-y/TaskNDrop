import classes from './AppNavigation.module.scss'
import SvgIcon from "../UI/svgIcon/SvgIcon"

import Image, { StaticImageData } from 'next/image'

type Props = { children: React.ReactNode }

const SurfaceIconWrapper: React.FC<{ image?: StaticImageData, selected: boolean, path?: string, fill?: string, classN?: string, width?: string, height?: string, viewBox?: string, onSelectTab: (name: string) => void, name: string }> = (props) => {
    return (
        <div onClick={() => props.onSelectTab(props.name)} className={classes['surface-action-icon-wrapper']}>
            <div className={`${classes['surface-view-icon-wrapper']} ${props.selected ? classes['is-selected'] : ''}`}>
                {props.path && <SvgIcon path={props.path} width={props.width} height={props.height} viewBox={props.viewBox} />}
                {props.image && <Image src={props.image} width={props.width} height={props.height}  alt={props.name}/>}
            </div>
            {props.selected && <div className={`${classes['selected-view-indication']} ${props.selected ? classes.selected : ''}`}></div>}
        </div >
    )


}

export default SurfaceIconWrapper