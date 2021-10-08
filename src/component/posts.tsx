import { IPosts } from "../interface/interface"

export const Posts: React.FC<IPosts> = ({ posts, onChangeCheckBox, onRemove,onEdit }) => {

  return (
    <div className="row">
      {
        posts.map(item => {
          const classes = ['']
          if (item.complated) {
            classes.push('linethrough')
          }
          return (
            <div className="col s12 " key={item.id} >
              <div className="card  blue lighten-5">
                <div className="card-content white-text">
                  <label>
                    <input type="checkbox" onChange={() => onChangeCheckBox(item.id)} />
                    <span className={classes.join(' ')}>{item.title}</span>
                  </label>
                  <div>
                    <i className='material-icons purple-text' onClick={() => onEdit(item.title, item.id)}>edit</i>
                    <i className='material-icons red-text' onClick={() => onRemove(item.id)}>delete</i>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div >
  )
}