import { fork, take,call,put,delay,takeLatest,select} from "redux-saga/effects";
import { getList } from "../apis/task";
import * as taskTypes from "./../constants/task";
import {STATUS_CODE} from './../constants/index'
import { fetchListTaskFailed, fetchListTaskSuccess ,filterTaskSuccess} from "../action/task";
import { showLoading , hideLoading } from "../action/ui";

/**
 * B1: Thực thi action lấy danh sách
 * B2: Gọi API 
 * B2.1: Hiển thị thanh loading
 * B3: Kiểm tra status code 
 * B4: thực thi công việc tiếp theo
 */

function* watchFetchListTaskAction() {
    while(true){
        yield take(taskTypes.FETCH_TASK);
        //===========Block=========
        yield put(showLoading());
        yield delay(1000);
      const res = yield call(getList);
      const {status,data} = res;
     if(status===STATUS_CODE.SUCCESS,data) {
         //dispatch action Success
         yield put(fetchListTaskSuccess(data))
        
     }
     else{
         //dispatch action ERR
         yield put(fetchListTaskFailed(data))
     }
    
     yield put(hideLoading());

    }
 
  
}
function * filterTaskSaga({payload}){
   yield delay(500)
    const {keyword} = payload;
  
    
    const list = yield select(state =>state.task.listTask);
    const filterTask =  list.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
    console.log(filterTask);
    
    yield put(filterTaskSuccess(filterTask));
    
}
function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK,filterTaskSaga);

}
export default rootSaga;
