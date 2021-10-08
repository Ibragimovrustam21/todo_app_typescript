import { useEffect, useState } from "react"
import { FormBlock } from "../component/formBlock"
import { Posts } from "../component/posts"
import { editTitle, ITodoFormArray } from "../interface/interface"

export const TodoForm: React.FC = () => {
  const [posts, setPosts] = useState<ITodoFormArray[]>([])
  const [Etitle, setTitle] = useState<editTitle>({ title: '', id: 0 })

  // getItem
  useEffect(() => {
    const server = localStorage.getItem('todo')
    if (server) {
      setPosts(JSON.parse(server))
    }
  }, [])

  // setItem
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(posts))
  }, [posts])

  // onAdd
  const onAdd = (title: string) => {
    const newTitle: ITodoFormArray = {
      title,
      id: Date.now(),
      complated: false
    }
    setPosts(prev => [newTitle, ...prev])
  }

  // changeCheckBox
  const onChangeCheckBox = (id: number) => {
    setPosts(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          complated: !item.complated
        }
      }
      return item
    }))
  }

  // onRemove
  const onRemove = (id: number) => {
    setPosts(prev => prev.filter(e => e.id !== id))
  }

  //onEdit
  const onEdit = (title: string, id: number) => {
    setTitle({ title, id })
  }
  const editFN = (title: string, id: number) => {
    setPosts(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title
        }
      }
      return item
    }))
    setTitle({ title: '', id: 0 })
  } 

  return (
    <div className='container'>
      <FormBlock onAdd={onAdd} Etitle={Etitle} editFN={editFN} />
      <Posts posts={posts} onChangeCheckBox={onChangeCheckBox} onRemove={onRemove} onEdit={onEdit} />
    </div>
  )
}