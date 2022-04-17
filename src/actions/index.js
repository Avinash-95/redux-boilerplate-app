// common actions to use in multiple places

export const getRequest = (actionType, payload)=>({
    type:actionType,
    payload:payload
})

export const getResponse = (actionType, response)=>({
    type:actionType,
    payload:response
})

export const getFailure = (actionType, error)=>({
    type:actionType,
    payload:error
})