
import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key : 'networkAtom',
    default : 102
})

export const jobsAtom = atom({
    key : 'jobsAtom',
    default : 0
})

export const messageAtom = atom({
    key : 'messageAtom',
    default : 12
})

export const notificationAtom = atom({
    key : 'notificationAtom',
    default : 0
})

export const totalNotificationCountAtom = selector({
    key : 'totalNotificationCountAtom',
    get : ({get}) => {
        const networkCount = get(networkAtom)
        const jobsCount = get(jobsAtom)
        const messageCount = get(messageAtom)
        const notificationCount = get(notificationAtom)
        return networkCount + jobsCount + messageCount + notificationCount;
    }
})