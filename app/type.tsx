/**
  - **200 OK**: 요청이 성공적으로 처리되었음을 나타냅니다. 주로 GET 요청의 응답으로 사용됩니다.
  - **201 Created**: 요청이 성공적으로 처리되었으며, 새로운 리소스가 생성되었음을 나타냅니다. 주로 POST 요청의 응답으로 사용됩니다.
  - **204 No Content**: 요청이 성공적으로 처리되었지만, 응답 본문이 없음을 나타냅니다. 주로 DELETE 요청의 응답으로 사용됩니다.
  - **400 Bad Request**: 잘못된 문법으로 인해 서버가 요청을 이해할 수 없음을 나타냅니다.
  - **401 Unauthorized**: 인증이 필요하거나 인증에 실패했음을 나타냅니다.
  - **403 Forbidden**: 서버가 요청을 이해했지만, 권한이 없어서 요청을 거부했음을 나타냅니다.
  - **404 Not Found**: 서버가 요청받은 리소스를 찾을 수 없음을 나타냅니다.
  - **405 Method Not Allowed**: 서버가 요청한 메소드를 인식했지만, 대상 리소스에 대해 허용되지 않음을 나타냅니다.
  - **409 Conflict**: 요청이 서버의 현재 상태와 충돌함을 나타냅니다.
  - **422 Unprocessable Entity**: 요청의 문법은 올바르지만, 의미론적 오류로 인해 요청을 처리할 수 없음을 나태냅니다.
 */

import { Document } from 'mongoose';

export type ApiResponse = {
  message?: string,
  error?: string
}
export type ALL = 'ALL';

export namespace IUser {
  export interface Model extends Document {
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export type SignUpParams = {
    email: string,
    password: string
  }
  export type SignUpResponse = ApiResponse
  
  export type LoginParams = {
    email: string,
    password: string
  }
  export type LoginResponse = ApiResponse & {
    token: string,
    refreshToken: string
  }
}

export namespace ICharacter {
  export enum VisibilityType {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
    LINK = 'LINK'
  }
  
  export interface Model extends Document {
    name: string;
    system: string;
    secret: string;
    creatorId: IUser.Model['_id'];
    visibility: VisibilityType;
    createdAt: Date;
    updatedAt: Date;
  }

  export type CreateParams = {
    name: string,
    visibility: VisibilityType,
    system: string,
    secret: string
  }
  export type CreateResponse = ApiResponse;

  export type ListParams = {
    searchText: string,
    offset: number,
    length: number
  }
  export type ListResponse = {
    list: Array<Omit<Model, 'secrete'>>,
    totalCount: number
  }

  export type MineParams = {
    visibility: VisibilityType | ALL,
  }
  export type MineResponse = ApiResponse & {
    list: Array<Omit<Model, 'secrete'>>,
    totalCount: number
  }
}