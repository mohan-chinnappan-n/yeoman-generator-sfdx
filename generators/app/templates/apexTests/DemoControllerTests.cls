
@isTest
private class <%=apexCtrlName %>Tests {
    @isTest static void testConstructor() {
    	Contact contact = new Contact(LastName='Smith');
    	insert contact;

    	Test.setCurrentPage(Page.<%=vfPageName %>);
    	ApexPages.currentPage().getParameters().put('lastName', 'Smith');

    	<%=apexCtrlName %> demo = new <%=apexCtrlName %>(new ApexPages.StandardController(contact));
      // check for the Id of the contact
    	System.assertEquals(contact.Id, ApexPages.currentPage().getParameters().get('id'));
    }

    @isTest static void testGetAppVersion() {
        <%=apexCtrlName %> demo = new <%=apexCtrlName %>();
        System.assertEquals(demo.getAppVersion(), '1.0.0');
    }
}
