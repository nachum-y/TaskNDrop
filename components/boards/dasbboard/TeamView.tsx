import Image from 'next/image'
import { FullMember } from '../../../service/type'
import classes from './Dashboard.module.scss'


const TeamView: React.FC<{ boardMembers: FullMember[] }> = ({ boardMembers }) => {
    return (

        <div className={`${classes['dashboard-item-holder']} ${classes['dashboard-item-team']}`}>
            <div className={classes['dashboard-item-holder-title']}>
                <span>
                    Team
                </span>
            </div>
            <div className={classes['members-view']}>

                {boardMembers.map((member) => (<div key={member.id} className={classes['members-view-member']}>
                    <div className={classes['img-holder']}>
                        <Image src={`/persons/${member.id}.jpeg`} width={'96px'} height={'96px'} alt={member.name} />
                    </div>
                    <div className={classes['member-name']}>
                        {member.name}
                    </div>
                    <a href='https://www.linkedin.com/in/nachumy7' target="_blank" rel="noopener noreferrer">
                        <div className={classes['member-linkedIn']}>
                            Connect on LinkedIn
                        </div>
                    </a>
                </div>))}

            </div >
        </div >

    )
}

export default TeamView