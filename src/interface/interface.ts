export interface ITodoFormArray {
  title: string
  id: number
  complated: boolean
}

export interface ITodoFormBlock {
  onAdd(title: string): void
  Etitle: editTitle
  editFN(title:string,id:number):void
}

export interface IPosts {
  posts: ITodoFormArray[]
  onChangeCheckBox(id: number): void
  onRemove(id: number): void
  onEdit(title: string, id: number): void
}
export type editTitle = {
  title: string
  id: number
}