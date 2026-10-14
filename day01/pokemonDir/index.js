import pokemon from "pokemon";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { constants } from "node:fs";

pokemon.random();

/* access가 나타내는 경우의 수는 3가지임
   1. 폴더가 존재하고 모든 권한이 있을 경우
   2. 폴더가 존재하고 권한이 없을 경우
   3. 폴더가 존재하지 않을 경우
*/
fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    // 폴더가 존재하고 모든 권한이 있을 경우
    return Promise.reject("이미 폴더 있음");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      // 폴더가 존재하지 않을 경우에만 발동
      console.log("폴더 없음");
      return fs.mkdir(path.join(os.homedir(), "Desktop", pokemon.random()));
    }

    // 폴더가 존재하고 모든 권한이 있을 경우
    // 폴더가 존재하고 권한이 없을 경우
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 만들기 성공");
    // 여기서 fs는 Promise객체이다. 프로미스를 리턴하기에 다음 then()으로 넘어감
  })
  .catch((err) => {
    console.log(err);
  });
