import * as React from 'react'
import { positions } from '@mui/system'
import { ClickAwayListener, Popper } from '@mui/material'

import classes from './PersonMenu.module.scss'
import { FullMember, Labels, Member } from '../../../../service/type'




const PersonMenu: React.FC<{ onMenuClick: (actionId: string | number | Member[]) => void, menuObj: { boardList: FullMember[], celValue: Member[] } }> = ({ onMenuClick, menuObj }) => {



    const [showInvite, setShowInvite] = React.useState(false)
    const [suggestedMember, setSuggestedMember] = React.useState<FullMember[]>([])

    const onClickHandle = (status: string) => {
        onMenuClick(status)
    }

    const boardMembers = menuObj.boardList
    const taskMembers = menuObj.celValue

    React.useEffect(() => {
        setSuggestedMember(() => boardMembers.filter((member) => !taskMembers.find((m) => m.id === member.id)))
        console.log(suggestedMember)

    }, [boardMembers, taskMembers])




    console.log(taskMembers)

    // const userToDisplay = () => {
    //     if (boardMembers && taskMembers) {
    //         const membersToRemove = taskMembers.map(member => taskMembers.)
    //         console.log(membersToRemove)
    //         return boardMembers
    //     }


    // }
    // userToDisplay()



    const showInvitation = () => {
        setShowInvite((prevState) => !prevState)
    }

    const onRemovePersonHandler = (memberToRemove: Member) => {
        let updatedTaskMembers: Member[] = JSON.parse(JSON.stringify(taskMembers))
        updatedTaskMembers = taskMembers.filter(member => member.id !== memberToRemove.id)
        onMenuClick(updatedTaskMembers)
    }

    const onAddPersonHandler = (member: FullMember) => {
        const memberToAdd = {
            id: member.id,
            fullname: member.name,
            imgUrl: member.imgUrl
        }
        let updatedTaskMembers: Member[] = JSON.parse(JSON.stringify(taskMembers))
        updatedTaskMembers.push(memberToAdd)

        onMenuClick(updatedTaskMembers)
    }
  


    return (
        <>
            {taskMembers && (
                <div className={classes['person-picker-view']} >
                    {!showInvite && (
                        <div className={classes['select-peson-view']}>
                            <div className={classes['members-to-remove-container']}>
                                {taskMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className={classes['memebers-to-remove-holder']}>

                                        <div className={classes['person-remove-img']} >
                                            <img className={classes['person-bullet-mini']} src={member.imgUrl} />
                                        </div>
                                        <span>{member.fullname}</span>
                                        <div className={classes['remove-btn-holder']} onClick={() => onRemovePersonHandler(member)}>
                                            <div className={classes['remove-person-btn']}></div>
                                        </div>
                                    </div>))}
                            </div >


                            <div className={classes['search-person-input-holder']}>
                                < input className={classes['searchPerson-input']} type='text' placeholder='Search names' />
                                < div className={classes['search-icon-holder']}>
                                </div>
                            </div>



                            <div className={classes['suggested-members']}>
                                <h3>Suggested people</h3>
                                {suggestedMember && suggestedMember.map((member) => (<div
                                    key={member.id}
                                    onClick={() => onAddPersonHandler(member)}
                                    className={classes['member-holder']}
                                >
                                    <div className={classes['person-bullet-menu']}>
                                        <img src={member.imgUrl} alt={member.name} />
                                    </div>
                                    <span className={classes['memeber-name']}>{member.name}</span>
                                </div>)
                                )}
                            </div>



                            <div className={classes['person-btn-container']} >
                                <button className={classes['invite-new-members-btn']} onClick={showInvitation} >
                                    <span>Invite new members</span>
                                    <div className={classes['new-member-icon']} > hey</div>
                                </button>
                            </div>
                        </div >
                    )}

                    {showInvite && (
                        <div className={classes['invite-person-view']}>
                            <div className={classes['title-invite-holder']}>
                                <span>Type in email address to invite</span>
                            </div>
                            <div className={classes['input-invite-holder']}>
                                <input autoFocus autoComplete='email' required type='email' placeholder='Enter email' />
                            </div>
                            <div className={classes['invite-btns-holder']}>
                                <button onClick={showInvitation} className={classes['cancel-invite-btn']}>Cancel</button>
                                <button className={classes['invite-this-person-btn']}> Invite</button >
                            </div >
                        </div >
                    )}


                </div >
            )
            }
        </>

    )
}

export default PersonMenu