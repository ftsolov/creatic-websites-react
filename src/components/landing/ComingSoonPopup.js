
const ComingSoonPopup = ([visible]) => {

  return (
    <div className={ visible ? 'visible' : 'hidden'}>
      <h1>Feature coming soon, stay tuned for updates!</h1>
    </div>
  )

}

export default ComingSoonPopup