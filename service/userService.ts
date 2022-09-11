type userService = {
    getActiveMember: () => {}
}

export const userService = {
    getActiveMember,

}


async function getActiveMember() {
    // let activeMember = JSON.parse(sessionStorage.getItem('activeUser'))
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
    return {
        id: "m103",
        name: "Nachum Yosef",
        email: "Nachum@gmail.com",
        isAdmin: false,
        joinedAt: 1658291514565,
        lastSeen: 1658291514565,
        imgUrl: "https://ca.slack-edge.com/T035GULFZRD-U03CGDCUXPA-307cccdf69f0-512",
        color: "#f5f5f5"
    }
}



// async function setActiveMember(member) {
//     let activeMember = JSON.stringify(member)
//     sessionStorage.setItem('activeUser', activeMember)
//     return member
// }

