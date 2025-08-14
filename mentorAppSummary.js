/*
Yes sir, I would like to share a project that I worked on Dev Story Chandigarh. This project is called Mentor-app, it's a mobile application where the customers can book
professionals for help through video call / audio call
So in this application I was responsible for building the highly scalable, efficient backend development. So for this I used nodeJs, expressJs as a backend Tech,
Typescript as a scripting language, Mongodb as a database management, EC2 and S3 AWS services and the some third party libraries like stripe payment gateway, socket.io for chats, 
vonage for video call, firebase-admin for pussh notification , node-cron for task scheduling, twillio for the OTP, node-mailer for the emails
So key features and functionlities I developed are
Signup/login : Where the customer/professioal could signup with email, mobile number via OTP or social login like facebook, google, apple 
So when the professionals complete the signup flow, they give ttheir details like expirence, hourly rate, hlaf-hourly rate, and some verification documents, the admin review these and approved them
Once approved , we create connect stripe accounmt for professional
Now the customer browse the professional on the basis of profession and subProfession , review/rating, rate etc. and could be book a professional on the basis of their need,
porfessional slots and complete the payment.
Here the professional have the option accep and reject
so if the professional reject the request , customer get a refund after the subraction of stripe fee
and if the professioal accept the request, customer get notified
after the bookiong session complete, customer give the feedback, and if theere any issue persists, admin review call recopring and take the descision of the payment

*/

/*
Sure, I'd like to share one of the most comprehensive projects I worked on during my time at DevStory, Chandigarh.

The project was called Mentor App, a full-stack web and mobile-based platform where I implemented most of the functionalities I'm experienced with. The tech stack included Node.js, Express.js, TypeScript, MongoDB, AWS EC2, AWS S3, and various third-party services.

Key Features & Functionalities I Developed:
Authentication: Users could sign up/login using email, mobile number, or social logins (Google, Facebook, Apple) via OTP.

User Roles: There were 3 roles — Customer, Professional, and Admin. Customers and professionals accessed the mobile app, while Admins used the admin panel.

Professional Onboarding: When professionals signed up, they submitted details like experience, hourly rate, and verification documents. Admins reviewed and approved these. Once approved, we created a Stripe business account for the professional.

Stripe Integration:

Stripe Customer account for customers.

Stripe Connect for professionals to handle bookings and payouts.

Booking Flow:

Customers browsed professionals based on skills, ratings, etc., and could book them by selecting a date/time, describing their issue, and making a payment.

Professionals had the option to accept or reject the request.

If rejected, an automated refund was processed (minus Stripe fees).

If accepted, the customer was notified.

Real-Time Features:

Video & audio calling (via a third-party SDK like Agora or Twilio),

Chat functionality using Socket.IO,

Push notifications via Firebase Admin.

Scheduled Jobs: Implemented with node-cron for background tasks like daily summaries and automated reminders.

Feedback Mechanism: After the session, customers filled a feedback form. If issues were reported, the admin could review video call recordings and take action.
*/
