
const SvgIcon: React.FC<{ path: string, fill?: string, classN?: string, width?: string, height?: string, viewBox?: string }> = ({ viewBox, fill, width, height, classN, path }) => {
    return (
        <svg
            viewBox={viewBox || '0 0 20 20'}
            fill={fill || 'currentColor'}
            width={width || '24'}
            height={height || '24'}
            aria-hidden="true"
            className={`icon_component ${classN || ''}`}
            dangerouslySetInnerHTML={{ __html: path }} >
        </svg>
    )
}

export default SvgIcon