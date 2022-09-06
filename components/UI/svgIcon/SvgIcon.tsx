
type Props = { children: React.ReactNode }
const SvgIcon: React.FC<{ path: string, fill?: string, classN?: string, width?: string, height?: string, viewBox?: string }> = (props) => {
    return (
        <svg
            viewBox={props.viewBox ? props.viewBox : '0 0 20 20'}
            fill={props.fill ? props.fill : 'currentColor'}
            width={props.width ? props.width : '24'}
            height={props.height ? props.height : '24'}
            aria-hidden="true"
            className={`icon_component ${props.classN ? props.classN : ''}`}
            dangerouslySetInnerHTML={{ __html: props.path }} >
        </svg>
    )
}

export default SvgIcon