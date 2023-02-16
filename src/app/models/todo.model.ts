export class Todo {
    constructor(
        public id: number,
        public keyWord: String,
        public description: String,
        public created_at: String,
        public updated_at?: String
    ) {

    }
}