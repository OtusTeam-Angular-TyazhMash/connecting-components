export class MachineCreate {
    make: string = '';
    model: string = '';
    year: string = '';
    vin: string = '';
    number: string = '';
    services: TOItem[] = [];
    ownerInfo: OwnerInfo | undefined
  }

  class TOItem{
    date: Date | undefined;
    place: string | undefined;
  }

  class OwnerInfo
  {
    name:string = '';
    lastName: string = '';
    address: Address | undefined
  }

  class Address{
    street: string ='';
    city: string ='';
    house: string ='';
    apartment: string = '';
  }
  
  
  