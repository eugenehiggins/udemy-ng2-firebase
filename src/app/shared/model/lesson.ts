/**
 * Created by ehigginsiii on 1/31/17.
 */

export class Lesson {

    static fromJsonList(array): Lesson[] {
        return array.map(Lesson.fromJson);
    }

    static fromJson({ $key, description, duration, url, tags, pro, longDescription, courseID }): Lesson {
        return new Lesson($key, description, duration, url, tags, pro, longDescription, courseID);
    }

    constructor(public $key: string,
                public description: string,
                public duration: string,
                public url: string,
                public tags: string,
                public pro: boolean,
                public longDescription: string,
                public courseId: string) {

    }
    get isBeginner() {
        return this.tags && this.tags.includes('BEGINNER');
    }
}
