export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isAdmin: boolean;
    isReviewer: boolean;

    constructor(id: number = 0, userName: string = '', password: string = '', firstName: string = '',
                lastName: string = '', phoneNumber: string = '', email: string = '', 
                isAdmin: boolean = false, isReviewer: boolean = false) {

            this.id = id;
            this.userName = userName;
            this.password = password;
            this.firstName = firstName;
            this.lastName = lastName;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.isAdmin = isAdmin;
            this.isReviewer = isReviewer;

    }
}

// from spring User fields
// private int id;
// 	private String userName;
// 	private String password;
// 	private String firstName;
// 	private String lastName;
// 	private String phoneNumber;
// 	private String email;
// 	private boolean isAdmin;
// 	private boolean isReviewer;