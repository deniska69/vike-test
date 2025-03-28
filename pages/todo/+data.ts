// https://vike.dev/data
import type { PageContextServer } from 'vike/types';

import { todos } from '../../database/todoItems';

export type Data = {
	todo: { text: string }[];
};

export default async function data(_pageContext: PageContextServer): Promise<Data> {
	return { todo: todos };
}
