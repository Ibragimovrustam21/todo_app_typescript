import { useEffect, useState } from "react"
import { ITodoFormBlock } from "../interface/interface"

export const FormBlock: React.FC<ITodoFormBlock> = ({ onAdd, Etitle, editFN }) => {
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (Etitle.id !== 0) {
      setTitle(Etitle.title)
      document.getElementById('label')?.classList.add('active')
    }
  }, [Etitle])

  const onkeypress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && title.trim()) {
      return (
        Etitle.id !== 0 ? editFN(title, Etitle.id) : onAdd(title), 
        setTitle('')
      )
    }
  }

return (
  <div className="row">
    <div className="input-field col s12">
      <input
        id="email"
        type="text"
        className="validate"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={onkeypress}
      />
      <label htmlFor="email" id='label'>Add Post</label>
    </div>
  </div>
)
}