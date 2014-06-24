
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.BusPhone
 *  06/18/2014 18:10:26
 * 
 */
public class BusPhone {

    private Integer id;
    private String phone;
    private BusDriver busDriver;

    public BusPhone() {
    }

    public BusPhone(Integer id, String phone) {
        this.id = id;
        this.phone = phone;
    }

    public BusPhone(Integer id, String phone, BusDriver busDriver) {
        this.id = id;
        this.phone = phone;
        this.busDriver = busDriver;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public BusDriver getBusDriver() {
        return busDriver;
    }

    public void setBusDriver(BusDriver busDriver) {
        this.busDriver = busDriver;
    }

}
