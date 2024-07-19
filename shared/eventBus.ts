import { Subject } from 'rxjs';

interface EventData {
    type: string;
    data: any;
}

const eventBus = new Subject<EventData>();

export default eventBus;
