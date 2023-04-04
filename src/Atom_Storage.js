import { atom } from 'recoil'

export const myAtom = atom({
    key: 'myAtom',
    default: {
        color: 'red'
    }
});

export const taskListAtom = atom({
    key: 'taskListAtom',
    default: []
});