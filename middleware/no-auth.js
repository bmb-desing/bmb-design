export default function({redirect, store}) {
  if(store.state.User.user.id) {
    return redirect('/')
  }
}
