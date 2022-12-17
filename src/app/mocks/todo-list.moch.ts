// on va créer un type qui sera le type du mock
export interface Todo {  // c'est un type donc on ne met que les première lettre de chaque mot du nom de mon type
    id: number;
    title: string;
    content?: string;  // contenu optionnel donc on met un ? avant les :
    status: "waiting" | "in progress"; // c'est comme un qcm, on met des reponse par defaut
    isUrgent: boolean;
}


// on créer notre mock et on le type (parce qu'on est en typeScript)
//const TODOLIST et le mock et Todo est son type
export const TODOLIST: Todo[] = [      //c'est un mock donc on le met en majuscule
     // on met nos objets dans le tableau
    {    //objet 1
        id: 1,
        title: "faire les courses",
        content: "lait, brioche, cacahuettes", //content est optionnel donc j'ai la possibilité de le mettre ou non
        status: "waiting",
        isUrgent: true
    },
    {    //objet 2
        id: 2,
        title: "ramener les plantes",
        status: "waiting",
        // ici je n'ai pas mis de content. mais c'est pas grave car c'est optionnel
        isUrgent: false
    },
    {    //objet 3
        id: 3,
        title: "Changer la chasse des toilettes",
        status: "waiting",
        isUrgent: false
    },
    {    //objet 4
        id: 4,
        title: "faire le rattrapage de cours",
        content: "voir le vs code",
        status: "in progress",
        isUrgent: true
    }
]; 
