import addUser from './addUser'

export default (dependencies: any) => {
    return {
        addUserController: addUser(dependencies)
    }
}