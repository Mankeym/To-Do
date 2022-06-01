
export interface taskNewType {
    userId: number;
    id: number;
    title: string;
    completed:boolean;
}
 export interface  state {
     tasks: any[],
     returnTask: any[],
     checked: boolean
 }
