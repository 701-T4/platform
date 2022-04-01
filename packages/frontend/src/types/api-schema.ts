/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/v1/ping': {
    get: operations['APIController_getPing'];
  };
  '/api/v1/user': {
    get: operations['UsersController_currentUser'];
    put: operations['UsersController_updateUser'];
    /** User must be linked to a firebase ID */
    post: operations['UsersController_create'];
  };
  '/api/v1/user/tasks': {
    get: operations['UsersController_getTasksForUser'];
  };
  '/api/v1/house': {
    get: operations['HouseController_get'];
    put: operations['HouseController_joinHouse'];
    post: operations['HouseController_create'];
  };
  '/api/v1/house/update': {
    put: operations['HouseController_updateHouse'];
  };
  '/api/v1/house/note': {
    get: operations['NoteController_get'];
    post: operations['NoteController_create'];
  };
  '/api/v1/house/note/{id}': {
    put: operations['NoteController_update'];
    delete: operations['NoteController_delete'];
  };
  '/api/v1/house/bills': {
    get: operations['BillController_getBills'];
    post: operations['BillController_createBill'];
  };
  '/api/v1/house/bills/{id}': {
    get: operations['BillController_getBill'];
    put: operations['BillController_updateBill'];
    delete: operations['BillController_deleteBill'];
  };
  '/api/v1/house/bills/{id}/payment': {
    put: operations['BillController_updateBillPayment'];
  };
  '/api/v1/house/tasks': {
    get: operations['TasksController_getTasksForHouse'];
    post: operations['TasksController_createTask'];
  };
  '/api/v1/house/tasks/{id}': {
    put: operations['TasksController_modifyTask'];
    delete: operations['TasksController_deleteTaskFromHouse'];
  };
  '/api/v1/house/tasks/{id}/completed': {
    put: operations['TasksController_markTaskAsComplete'];
  };
  '/api/v1/house/issues': {
    get: operations['IssueController_getIssues'];
    post: operations['IssueController_createIssue'];
  };
  '/api/v1/house/issues/{id}': {
    get: operations['IssueController_getIssue'];
    put: operations['IssueController_updateIssue'];
    delete: operations['IssueController_deleteIssue'];
  };
  '/api/v1/house/issues/{id}/resolve': {
    put: operations['IssueController_updateIssueResolved'];
  };
  '/api/v1/house/announcements': {
    get: operations['AnnouncementController_getAnnouncements'];
    post: operations['AnnouncementController_createAnnouncement'];
  };
}

export interface components {
  schemas: {
    PingResponse: {
      /** Format: date-time */
      time: string;
      env: string;
    };
    CreateUserDto: {
      name: string;
      firebaseId: string;
      rentPercentage?: number;
      contact?: string;
      /** Format: date-time */
      dateJoined?: string;
      /** Format: date-time */
      contractEndingDate?: string;
    };
    UserResponseDto: {
      name: string;
      house?: string;
      firebaseId: string;
      rentPercentage?: number;
      contact?: string;
      /** Format: date-time */
      dateJoined?: string;
      /** Format: date-time */
      contractEndingDate?: string;
    };
    UpdateUserDto: {
      name: string;
      firebaseId: string;
      house?: string;
      rentPercentage?: number;
      contact?: string;
      /** Format: date-time */
      dateJoined?: string;
      /** Format: date-time */
      contractEndingDate?: string;
    };
    UserTasksResponseDto: {
      tasks?: string[];
    };
    CreateHouseDto: {
      name: string;
      email: string;
      address: string;
    };
    AnnouncementResponseDto: {
      title?: string;
      description?: string;
      author: string;
      houseCode: string;
      /** Format: date-time */
      dateCreated: string;
    };
    HouseResponseDto: {
      name?: string;
      email?: string;
      address?: string;
      rent?: string;
      maxOccupants?: string;
      code: string;
      owner: string;
      users: components['schemas']['UserResponseDto'][];
      latestAnnouncement?: components['schemas']['AnnouncementResponseDto'];
    };
    JoinHouseDto: {
      houseCode: string;
    };
    UpdateHouseDto: {
      name?: string;
      email?: string;
      address?: string;
      rent?: string;
      maxOccupants?: string;
      code: string;
      owner?: string;
      users?: string[];
    };
    CreateNoteDto: {
      name: string;
      value: string;
      /** @enum {string} */
      type: 'PLAIN' | 'SECRET' | 'WIFI';
    };
    ObjectId: { [key: string]: unknown };
    NoteResponseDto: {
      name: string;
      value: string;
      type: string;
      house: components['schemas']['ObjectId'];
    };
    UpdateNoteDto: {
      name: string;
      value: string;
      /** @enum {string} */
      type: 'PLAIN' | 'SECRET' | 'WIFI';
    };
    BillUser: {
      id: string;
      amount: number;
      paid: boolean;
      proof?: string;
    };
    BillResponseDto: {
      id: string;
      name: string;
      description: string;
      owner: string;
      due: number;
      users: components['schemas']['BillUser'][];
    };
    BillsResponseDto: {
      bills: components['schemas']['BillResponseDto'][];
    };
    CreateBillDto: {
      name: string;
      description: string;
      due: number;
      users: components['schemas']['BillUser'][];
    };
    UpdateBillDto: {
      name: string;
      description: string;
    };
    PayBillDto: {
      paid: boolean;
      proof?: string;
    };
    CreateTaskDto: {
      name: string;
      description: string;
      /** Format: date-time */
      dueDate: string;
      interval?: number;
      pool: string[];
    };
    HouseTasksResponseDto: {
      tasks?: string[];
    };
    CompleteTaskDto: {
      isComplete: boolean;
    };
    UpdateHouseTasksDto: {
      name?: string;
      description?: string;
      pool?: string[];
    };
    IssueResponseDto: {
      id: string;
      name: string;
      description: string;
      image: string;
      logger: string;
      loggedDate?: number;
      resolved: boolean;
    };
    IssuesResponseDto: {
      issues: components['schemas']['IssueResponseDto'][];
    };
    CreateIssueDto: {
      name: string;
      description: string;
      image: string;
      resolved: boolean;
    };
    UpdateIssueDto: {
      name: string;
      description: string;
      image: string;
      resolved?: boolean;
    };
    ResolveIssueDto: {
      resolved: boolean;
    };
    CreateAnnouncementDto: {
      title: string;
      description: string;
    };
    AnnouncementsResponseDto: {
      announcements: components['schemas']['AnnouncementResponseDto'][];
    };
  };
}

export interface operations {
  APIController_getPing: {
    parameters: {};
    responses: {
      /** ping successful */
      200: {
        content: {
          'application/json': components['schemas']['PingResponse'];
        };
      };
    };
  };
  UsersController_currentUser: {
    parameters: {};
    responses: {
      /** returns the user information */
      200: {
        content: {
          'application/json': components['schemas']['UserResponseDto'];
        };
      };
    };
  };
  UsersController_updateUser: {
    parameters: {};
    responses: {
      /** user details updated successfully */
      200: {
        content: {
          'application/json': components['schemas']['UserResponseDto'];
        };
      };
      /** user details are invalid */
      400: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateUserDto'];
      };
    };
  };
  /** User must be linked to a firebase ID */
  UsersController_create: {
    parameters: {};
    responses: {
      /** User successfully created */
      201: {
        content: {
          'application/json': components['schemas']['UserResponseDto'];
        };
      };
      /** User already exists */
      409: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateUserDto'];
      };
    };
  };
  UsersController_getTasksForUser: {
    parameters: {};
    responses: {
      /** tasks retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['UserTasksResponseDto'];
        };
      };
      /** user is not in a house */
      400: unknown;
    };
  };
  HouseController_get: {
    parameters: {};
    responses: {
      /** house retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['HouseResponseDto'];
        };
      };
      /** user is not in a house */
      204: never;
    };
  };
  HouseController_joinHouse: {
    parameters: {};
    responses: {
      /** house joined successfully */
      200: {
        content: {
          'application/json': components['schemas']['HouseResponseDto'];
        };
      };
      /** code is invalid */
      400: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['JoinHouseDto'];
      };
    };
  };
  HouseController_create: {
    parameters: {};
    responses: {
      /** house created successfully */
      201: {
        content: {
          'application/json': components['schemas']['HouseResponseDto'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateHouseDto'];
      };
    };
  };
  HouseController_updateHouse: {
    parameters: {};
    responses: {
      /** house details updated successfully */
      200: {
        content: {
          'application/json': components['schemas']['HouseResponseDto'];
        };
      };
      /** failed to update house details */
      400: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateHouseDto'];
      };
    };
  };
  NoteController_get: {
    parameters: {};
    responses: {
      /** notes retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['NoteResponseDto'][];
        };
      };
      /** user does not belong to a house */
      400: unknown;
    };
  };
  NoteController_create: {
    parameters: {};
    responses: {
      /** note created successfully */
      201: {
        content: {
          'application/json': components['schemas']['NoteResponseDto'];
        };
      };
      /** user does not belong to a house */
      400: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateNoteDto'];
      };
    };
  };
  NoteController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** note updated successfully */
      200: {
        content: {
          'application/json': components['schemas']['NoteResponseDto'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateNoteDto'];
      };
    };
  };
  NoteController_delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** note deleted successfully */
      204: never;
    };
  };
  BillController_getBills: {
    parameters: {};
    responses: {
      /** Bills retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['BillsResponseDto'];
        };
      };
      /** User is not in a house */
      400: unknown;
    };
  };
  BillController_createBill: {
    parameters: {};
    responses: {
      /** Bill created successfully */
      201: {
        content: {
          'application/json': components['schemas']['BillResponseDto'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateBillDto'];
      };
    };
  };
  BillController_getBill: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Bills retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['BillResponseDto'];
        };
      };
      /** User is not in a house */
      400: unknown;
    };
  };
  BillController_updateBill: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Bill updated successfully */
      200: {
        content: {
          'application/json': components['schemas']['BillResponseDto'];
        };
      };
      /** Not the bill owner */
      403: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateBillDto'];
      };
    };
  };
  BillController_deleteBill: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Bill deleted successfully */
      204: never;
      /** Not the bill owner */
      403: unknown;
    };
  };
  BillController_updateBillPayment: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Bill marked successfully */
      200: {
        content: {
          'application/json': components['schemas']['BillResponseDto'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['PayBillDto'];
      };
    };
  };
  TasksController_getTasksForHouse: {
    parameters: {};
    responses: {
      /** tasks retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['HouseTasksResponseDto'];
        };
      };
      /** user is not in a house */
      400: unknown;
    };
  };
  TasksController_createTask: {
    parameters: {};
    responses: {
      /** task created successfully */
      201: unknown;
      /** Invalid request */
      400: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateTaskDto'];
      };
    };
  };
  TasksController_modifyTask: {
    parameters: {
      path: {
        /** id of the task to update */
        id: unknown;
      };
    };
    responses: {
      /** user is not the owner of the house or not in the house */
      403: unknown;
      /** task does not exist */
      404: unknown;
      /** task successfully updated. */
      default: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateHouseTasksDto'];
      };
    };
  };
  TasksController_deleteTaskFromHouse: {
    parameters: {
      path: {
        /** id for the task to delete */
        id: unknown;
      };
    };
    responses: {
      /** task successfully deleted. */
      204: never;
      /** user is not the owner of the house */
      403: unknown;
      /** task not found */
      404: unknown;
    };
  };
  TasksController_markTaskAsComplete: {
    parameters: {
      path: {
        /** id for the task to mark as complete or not */
        id: unknown;
      };
    };
    responses: {
      /** user is not assigned to the task */
      400: unknown;
      /** task not found */
      404: unknown;
      /** tasks successfully marked as complete/not complete. */
      default: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CompleteTaskDto'];
      };
    };
  };
  IssueController_getIssues: {
    parameters: {};
    responses: {
      /** Issues retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['IssuesResponseDto'];
        };
      };
      /** User is not in a house */
      400: unknown;
    };
  };
  IssueController_createIssue: {
    parameters: {};
    responses: {
      /** Issue created successfully */
      201: {
        content: {
          'application/json': components['schemas']['IssueResponseDto'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateIssueDto'];
      };
    };
  };
  IssueController_getIssue: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Issue retrieved successfully */
      200: {
        content: {
          'application/json': components['schemas']['IssueResponseDto'];
        };
      };
      /** User is not in a house */
      400: unknown;
    };
  };
  IssueController_updateIssue: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Issue updated successfully */
      200: {
        content: {
          'application/json': components['schemas']['IssueResponseDto'];
        };
      };
      /** Not the issue logger */
      403: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateIssueDto'];
      };
    };
  };
  IssueController_deleteIssue: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Issue deleted successfully */
      204: never;
      /** Not the issue logger */
      403: unknown;
    };
  };
  IssueController_updateIssueResolved: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Issue resolved successfully */
      200: {
        content: {
          'application/json': components['schemas']['IssueResponseDto'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ResolveIssueDto'];
      };
    };
  };
  AnnouncementController_getAnnouncements: {
    parameters: {};
    responses: {
      /** announcements fetched successfully */
      200: {
        content: {
          'application/json': components['schemas']['AnnouncementsResponseDto'];
        };
      };
    };
  };
  AnnouncementController_createAnnouncement: {
    parameters: {};
    responses: {
      /** announcement created successfully */
      201: {
        content: {
          'application/json': components['schemas']['AnnouncementResponseDto'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateAnnouncementDto'];
      };
    };
  };
}

export interface external {}
