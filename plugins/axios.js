export default function ({$axios, error, redirect}) {
  $axios.onResponse(res=>{
    return res;
  })
  $axios.onError(err => {
    return error({
      statusCode: err.response.status,
      message: err.response.data
    })
  })
}

