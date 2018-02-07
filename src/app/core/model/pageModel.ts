/**
 * @author Mr.zhou
 */
export class PageModel<T> {
    total: number;
    pageIndex: number;
    pageSize: number;
    list: T[];
}
