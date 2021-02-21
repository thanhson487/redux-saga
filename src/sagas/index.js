import { fork, take,call,put } from "redux-saga/effects";
import { getList } from "../apis/task";
import * as taskTypes from "./../constants/task";
import {STATUS_CODE} from './../constants/index'
import { fetchListTaskFailed, fetchListTaskSuccess } from "../action/task";

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
    }
 
  
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
}
export default rootSaga;
