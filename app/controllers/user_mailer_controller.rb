class UserMailerController < ActionMailer::Base
    default :from => "me@mydomain.com"
    # email above needs to change. setup task spot email?

 def registration_confirmation(user)
    @user = user
    mail(:to => "#{user.first_name} #{user.last_name} <#{user.email}>", :subject => "Registration Confirmation")
 end
end
