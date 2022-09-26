type userService = {
    getActiveMember: () => {}
}

export const userService = {
    getActiveMember,

}


async function getActiveMember() {
    let activeMemberSessionStorage = sessionStorage.getItem('activeUser')
    if (activeMemberSessionStorage) {
        let activeMember = JSON.parse(activeMemberSessionStorage)
        return activeMember
    } else {
        return {
            id: "m103",
            name: "Nachum Yosef",
            email: "Nachum@gmail.com",
            isAdmin: true,
            joinedAt: 1658291514565,
            lastSeen: 1658291514565,
            imgUrl: "",
            color: "#f5f5f5"
        }
    }

    // if (!activeMember) return ({
    // id: "m101",
    // name: "Shiran Abir",
    // email: "shiran@gmail.com",
    // isAdmin: false,
    // joinedAt: 1658291514565,
    // lastSeen: 1658291514565,
    // imgUrl: "https://ca.slack-edge.com/T035GULFZRD-U038455HGEP-5bb9017045d1-512",
    // color: "#f5f5f5"
    // })

}



// async function setActiveMember(member) {
//     let activeMember = JSON.stringify(member)
//     sessionStorage.setItem('activeUser', activeMember)
//     return member
// }

