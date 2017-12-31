
@isTest
private class ContactControllerTests {
    @isTest static void testConstructor() {
    	Contact contact = new Contact(LastName='Smith');
    	insert contact;

    	Test.setCurrentPage(Page.ContactPage);
    	ApexPages.currentPage().getParameters().put('lastName', 'Smith');

    	ContactController demo = new ContactController(new ApexPages.StandardController(contact));
      // check for the Id of the contact
    	System.assertEquals(contact.Id, ApexPages.currentPage().getParameters().get('id'));
    }

    @isTest static void testGetAppVersion() {
        ContactController demo = new ContactController();
        System.assertEquals(demo.getAppVersion(), '1.0.0');
    }
}
