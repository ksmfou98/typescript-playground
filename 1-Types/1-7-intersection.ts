{
    /**
     * Intersection Types : and로 이해하면 된다.
     */

    
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        empolyeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.empolyeeId, person.work());
    }

    internWork({
        name: 'dohyun',
        score: 1,
        empolyeeId: 123,
        work: () => {},
    })
}