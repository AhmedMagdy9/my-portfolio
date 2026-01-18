import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-footer',
  imports: [ FormsModule , TranslatePipe   ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {




  sending:WritableSignal<boolean> = signal(false);   

  sendEmail(form: any) {
    if (form.invalid) return;
    this.sending.set(true);
    emailjs.send(
      'service_3c543gd',   // Service ID
      'template_vk8k364',     // Template ID
      {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      },
      'm2i9UDGd1VSiPL8wB'          // Public Key
    )
    .then(() => {
      alert('Message sent successfully ✅');
      form.reset();
      this.sending.set(false);
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Something went wrong ❌');
      this.sending.set(false);
    });
  }

}
