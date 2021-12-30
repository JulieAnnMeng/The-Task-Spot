class UserMailer < ActionMailer::Base
    default :from => "theTaskSpot@gmail.com"
    # email above needs to change. setup task spot email?

   layout "registration_confirmation"

   def registration_confirmation(user)
      # debugger
      @user = user
      mail(:to => "#{user.first_name} #{user.last_name} <#{user.email}>", 
         :subject => "Registration Confirmation")
         # template_path: './views/layouts/user_mailer',
         # template_name: 'registration_confirmation.text.erb')
   end
end
